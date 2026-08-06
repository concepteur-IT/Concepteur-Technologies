import { Metadata } from "next";
import SocialMediaInfrastructureCaseStudyClient from "./client";

export const metadata: Metadata = {
  title: "Case Study: Social Media Infrastructure & Video Upload Optimization",
  description:
    "Building high-performance video upload infrastructure for large media files (2GB+) with AWS S3 Presigned URLs and async FFmpeg compression by Concepteur Technologies.",
  keywords: [
    "video upload optimization case study",
    "AWS S3 presigned URL upload",
    "FFmpeg video compression pipeline",
    "large file upload architecture",
    "Concepteur Technologies case study"
  ],
  alternates: {
    canonical: "/case-studies/video-upload-optimization",
  },
  openGraph: {
    title: "Video Upload Optimization Case Study | Concepteur Technologies",
    description:
      "Building a fast video upload system for large media files with AWS presigned URLs and FFmpeg compression.",
    url: "https://concepteurit.com/case-studies/video-upload-optimization",
    siteName: "Concepteur Technologies",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Upload Optimization Case Study | Concepteur Technologies",
    description:
      "Building a fast video upload system for large media files with AWS presigned URLs and FFmpeg compression.",
  },
};

export default function Page() {
  return <SocialMediaInfrastructureCaseStudyClient />;
}
