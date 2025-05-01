<template>
  <div class="post">
    <h1>Deploying a Static Website to AWS S3: A Quick Guide</h1>
    <p class="post-date">Published on: 2023-10-15</p>
    <div class="post-content">
      <p>
        Deploying a static website to AWS S3 is a cost-effective and scalable
        solution for hosting your web content. In this guide, I'll walk you
        through the process step by step.
      </p>

      <h2>Prerequisites</h2>
      <ul>
        <li>An AWS account</li>
        <li>AWS CLI installed and configured</li>
        <li>Your static website files ready for deployment</li>
      </ul>

      <h2>Step 1: Create an S3 Bucket</h2>
      <p>
        First, you'll need to create an S3 bucket to store your website files:
      </p>
      <ol>
        <li>Log in to the AWS Management Console</li>
        <li>Navigate to S3 service</li>
        <li>Click "Create bucket"</li>
        <li>
          Choose a unique bucket name (this will be part of your website URL)
        </li>
        <li>Select the region closest to your target audience</li>
        <li>Uncheck "Block all public access" and acknowledge the warning</li>
        <li>Click "Create bucket"</li>
      </ol>

      <h2>Step 2: Configure Bucket for Static Website Hosting</h2>
      <ol>
        <li>Select your bucket and go to "Properties"</li>
        <li>Scroll down to "Static website hosting"</li>
        <li>Click "Edit" and enable static website hosting</li>
        <li>Specify "index.html" as your index document</li>
        <li>Optionally specify an error document (e.g., "error.html")</li>
        <li>Save changes</li>
      </ol>

      <h2>Step 3: Set Bucket Policy</h2>
      <p>
        To make your website publicly accessible, you need to set the
        appropriate bucket policy:
      </p>
      <pre>
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}</pre
      >

      <h2>Step 4: Upload Your Website Files</h2>
      <p>
        You can upload your files using the AWS Console or AWS CLI. Here's the
        CLI command:
      </p>
      <pre>
aws s3 sync ./your-website-folder s3://your-bucket-name --acl public-read</pre
      >

      <h2>Step 5: Access Your Website</h2>
      <p>
        Once uploaded, you can access your website using the S3 website
        endpoint:
        <code>http://your-bucket-name.s3-website-region.amazonaws.com</code>
      </p>

      <h2>Step 6: Setting Up CloudFront for HTTPS</h2>
      <p>To enable HTTPS and improve performance, let's set up CloudFront:</p>
      <ol>
        <li>Go to the CloudFront service in AWS Console</li>
        <li>Click "Create Distribution"</li>
        <li>Under "Origin Domain", select your S3 bucket</li>
        <li>
          Configure the following settings:
          <ul>
            <li>
              Origin Protocol Policy: HTTP only (since we're using S3 website
              endpoint)
            </li>
            <li>Viewer Protocol Policy: Redirect HTTP to HTTPS</li>
            <li>Allowed HTTP Methods: GET, HEAD, OPTIONS</li>
            <li>Cache Policy: CachingOptimized</li>
            <li>Compress Objects Automatically: Yes</li>
          </ul>
        </li>
        <li>
          Under "Default Cache Behavior Settings":
          <ul>
            <li>Cache Based on Selected Request Headers: None</li>
            <li>Object Caching: Use Origin Cache Headers</li>
          </ul>
        </li>
        <li>Click "Create Distribution"</li>
        <li>
          Wait for the distribution to deploy (this can take 10-15 minutes)
        </li>
      </ol>

      <h3>Using Custom Domain with CloudFront</h3>
      <p>To use a custom domain with HTTPS:</p>
      <ol>
        <li>
          Request or import an SSL certificate in AWS Certificate Manager (ACM)
        </li>
        <li>
          In CloudFront distribution settings:
          <ul>
            <li>Add your custom domain to "Alternate Domain Names (CNAMEs)"</li>
            <li>Select your SSL certificate from ACM</li>
            <li>
              Update your DNS records to point to the CloudFront distribution
            </li>
          </ul>
        </li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Enable versioning to protect against accidental deletions</li>
        <li>Consider using CloudFront for better performance and HTTPS</li>
        <li>Set up proper CORS configuration if needed</li>
        <li>Use AWS Route 53 for custom domain names</li>
        <li>Implement proper caching headers for better performance</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Deploying a static website to AWS S3 is straightforward and
        cost-effective. With proper configuration, you can have a highly
        available and scalable website up and running in minutes. For production
        environments, consider adding CloudFront and Route 53 for better
        performance and custom domain support.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFirstPost",
};
</script>

<style scoped>
.post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.post-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.post-content {
  line-height: 1.6;
  color: #555;
}

.post-content h2 {
  margin-top: 2rem;
  color: #2c3e50;
  text-align: left;
}

.post-content ul,
.post-content ol {
  margin: 1rem 0;
  padding-left: 2rem;
  text-align: left;
}

.post-content pre {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 1rem 0;
  text-align: left;
}

.post-content code {
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
}
</style>
