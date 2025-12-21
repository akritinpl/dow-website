# Deployment Guide for Contact Form

This guide will help you deploy the AWS backend for the contact form functionality.

## Prerequisites

1. AWS Account with appropriate permissions
2. AWS CLI installed and configured
3. Node.js and npm installed
4. Amplify CLI installed globally: `npm install -g @aws-amplify/cli`

## Step 1: Configure AWS SES (Simple Email Service)

Before deploying, you need to set up AWS SES to send emails:

### 1.1 Verify Your Email Address in SES

1. Go to AWS Console → SES (Simple Email Service)
2. Select the region: `us-east-1` (or change it in `amplify/backend.ts` if using a different region)
3. Go to "Verified identities"
4. Click "Create identity"
5. Select "Email address"
6. Enter: `akritinpl@gmail.com` (or the email you want to use)
7. Click "Create identity"
8. Check your email and click the verification link

**Important**: In SES Sandbox mode (default), you can only send emails TO and FROM verified email addresses. To send to any email address, you need to request production access.

### 1.2 Request Production Access (Optional but Recommended)

1. In SES Console, go to "Account dashboard"
2. Click "Request production access"
3. Fill out the form explaining your use case
4. Wait for approval (usually 24-48 hours)

## Step 2: Deploy the Amplify Backend

### 2.1 Install Dependencies

```bash
npm install
```

### 2.2 Deploy to AWS

```bash
npx ampx sandbox
```

This command will:
- Create the Lambda function
- Set up the function URL
- Configure CORS
- Display the function URL in the output

### 2.3 Get the Function URL

After deployment completes, look for output like:

```
✅ sendContactEmail function deployed
Function URL: https://abc123.lambda-url.us-east-1.on.aws/
```

Copy this URL - you'll need it in the next step.

## Step 3: Configure Your React App

### 3.1 Create Environment File

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your function URL:
   ```
   VITE_CONTACT_FUNCTION_URL=https://your-actual-function-url.lambda-url.us-east-1.on.aws/
   ```

### 3.2 Restart Development Server

If you're running the dev server, restart it so it picks up the new environment variable:

```bash
npm run dev
```

## Step 4: Test the Contact Form

1. Go to your website's Contact page
2. Fill out the form with test data
3. Submit the form
4. Check the email inbox for `akritinpl@gmail.com`
5. You should receive an email with the contact form submission

## Step 5: Update Email Address (Production)

When ready for production:

1. Update the email in `amplify/backend.ts`:
   ```typescript
   COMPANY_EMAIL: "hq@downepal.com", // or your preferred email
   ```

2. Verify the new email address in SES (repeat Step 1.1)

3. Redeploy:
   ```bash
   npx ampx sandbox
   ```

## Troubleshooting

### Email Not Sending

1. **Check SES verified identities**: Make sure the sender email is verified
2. **Check CloudWatch Logs**:
   - Go to AWS Console → CloudWatch → Log Groups
   - Find `/aws/lambda/sendContactEmail`
   - Check for error messages

3. **Check SES Sandbox**: If in sandbox mode, both sender and recipient must be verified

### CORS Errors

If you see CORS errors in the browser console:

1. Check that `allowedOrigins` in `amplify/backend.ts` includes your domain
2. For production, update from `["*"]` to your specific domain:
   ```typescript
   allowedOrigins: ["https://yourdomain.com"],
   ```

### Function URL Not Working

1. Verify the URL is correct in your `.env` file
2. Make sure the URL starts with `https://` and ends with `/`
3. Test the function URL directly using curl:
   ```bash
   curl -X POST YOUR_FUNCTION_URL \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
   ```

## Production Deployment

For production deployment:

1. **Secure the Function URL**: Consider using AWS IAM authentication instead of `authType: "NONE"`
2. **Update CORS**: Replace `allowedOrigins: ["*"]` with your actual domain
3. **Monitor costs**: Check AWS CloudWatch and billing dashboard
4. **Set up alerts**: Configure SES sending quotas and CloudWatch alarms

## Cleaning Up

To delete all AWS resources:

```bash
npx ampx sandbox delete
```

This will remove the Lambda function and all associated resources.

## Environment Variables Reference

- `VITE_CONTACT_FUNCTION_URL`: Lambda Function URL (frontend)
- `COMPANY_EMAIL`: Email address to receive contact form submissions (backend)
- `SES_REGION`: AWS region for SES (backend)
