import { VideoUpload } from "@/components/video-upload"

export default function VideoUploadPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Upload Hero Video</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <VideoUpload />
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4">How to use:</h2>
            <ol className="space-y-3 text-sm text-gray-600">
              <li>1. Select a video file (MP4, WebM, etc.)</li>
              <li>2. Click "Upload Video"</li>
              <li>3. Copy the generated URL</li>
              <li>4. Update the hero video in app/page.tsx with the URL</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
