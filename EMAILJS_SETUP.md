# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** service_99omyvq

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Body:**
```
Hello Jahnnobi,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** template_6qm81lv

## Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (also called User ID) aspMFmSkqTx9SG5Tb

## Step 5: Update Your Code
Replace the placeholder values in `src/components/ContactSection.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

## Step 6: Initialize EmailJS
Add this line at the top of your ContactSection component:

```typescript
// Initialize EmailJS
emailjs.init(publicKey);
```

## Step 7: Update the onSubmit Function
Replace the simulation code with actual EmailJS call:

```typescript
await emailjs.send(serviceId, templateId, {
  from_name: data.name,
  from_email: data.email,
  subject: data.subject,
  message: data.message,
  to_email: 'jahnnobirahman230@gmail.com', // Your email
});
```

## Testing
1. Test the form on your local development server
2. Check your email inbox for the test message
3. Verify all fields are populated correctly

## Free Plan Limits
- 200 emails per month
- Perfect for portfolio websites
- No credit card required

## Troubleshooting
- Make sure your email service is properly connected
- Check that template variables match exactly
- Verify your public key is correct
- Check browser console for any error messages
