"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function VideoUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type.startsWith("video/")) {
        setFile(selectedFile)
        setError(null)
      } else {
        setError("Please select a video file")
        setFile(null)
      }
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first")
      return
    }

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/blob/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const data = await response.json()
      setUploadedUrl(data.url)
      setFile(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 border-2 border-dashed border-gray-300 rounded-lg">
      <div className="space-y-4">
        <input type="file" accept="video/*" onChange={handleFileChange} disabled={uploading} className="w-full" />

        {file && <div className="text-sm text-gray-600">Selected: {file.name}</div>}

        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="w-full flex items-center justify-center gap-2 bg-amber-600 text-white py-2 rounded-lg disabled:opacity-50"
        >
          {uploading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4" />
              Upload Video
            </>
          )}
        </button>

        {uploadedUrl && (
          <div className="space-y-2 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle className="w-4 h-4" />
              Upload successful!
            </div>
            <input type="text" value={uploadedUrl} readOnly className="w-full p-2 text-xs bg-white border rounded" />
            <p className="text-xs text-gray-600">Copy this URL and use it for your hero video</p>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-red-700 bg-red-50 p-4 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}
      </div>
    </div>
  )
}
