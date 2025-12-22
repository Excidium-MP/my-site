# Vercel Deployment Fix Instructions

## Current Issue
Your website at `manuelpalli.com` is serving assets with incorrect paths (`/my-site/assets/...`) causing 404 errors.

## Root Cause
Vercel has cached build settings or environment variables that override the correct configuration in your codebase.

## What Has Been Fixed in the Code
✅ `vite.config.ts` - base path set to `/` (correct for Vercel)
✅ `src/main.tsx` - BrowserRouter has no basename (correct)
✅ `package.json` - no homepage field (correct)
✅ `vercel.json` - explicit build configuration added
✅ `.vercelignore` - ensures clean builds from source
✅ Local build generates correct paths: `/assets/...` (not `/my-site/assets/...`)

## Required Actions in Vercel Dashboard

### Step 1: Clear Build Cache
1. Go to https://vercel.com/dashboard
2. Select your project (test-personal-web or my-site)
3. Go to **Settings** → **General**
4. Scroll down to find **"Clear Build Cache"** or similar option
5. Click to clear the cache

### Step 2: Check and Remove Environment Variables
1. In your project, go to **Settings** → **Environment Variables**
2. Look for ANY of these variables and DELETE them if they exist:
   - `BASE_URL`
   - `VITE_BASE`
   - `VITE_BASE_PATH`
   - `PUBLIC_URL`
   - `HOMEPAGE`
   - Any variable containing "base", "site", or "path"
3. Save changes

### Step 3: Verify Build Settings
1. Go to **Settings** → **General** → **Build & Development Settings**
2. Ensure these settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (or leave empty for auto-detect)
   - **Output Directory**: `dist` (or leave empty for auto-detect)
   - **Install Command**: `npm install` (or leave empty for auto-detect)
   - **Root Directory**: Leave empty or set to `.`
3. Save if you made any changes

### Step 4: Trigger Manual Redeploy
1. Go to **Deployments** tab
2. Find the latest deployment (commit: 968fb05 - "Add .vercelignore to ensure clean builds")
3. Click the three dots menu (⋯) next to it
4. Select **"Redeploy"**
5. Check the option **"Use existing Build Cache"** should be UNCHECKED
6. Confirm the redeployment

### Step 5: Verify the Fix
1. Wait 2-3 minutes for deployment to complete
2. Open your browser in **Incognito/Private mode**
3. Visit `https://www.manuelpalli.com`
4. Open DevTools (F12) → Console tab
5. You should see NO 404 errors
6. The site should load correctly with all styles and functionality

### Step 6: Clear Browser Cache
If the site still doesn't load after Vercel deployment succeeds:
1. Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
2. Select "Cached images and files"
3. Clear cache
4. Or simply use Incognito/Private mode

## Expected Result
After following these steps, your website should serve assets from `/assets/...` instead of `/my-site/assets/...`, and all 404 errors should be resolved.

## If Issues Persist
If you still see 404 errors after completing all steps:
1. Check the Vercel deployment logs for any errors
2. Verify the deployment status shows "Ready" (green)
3. Confirm you're viewing the latest deployment
4. Try accessing the Vercel preview URL directly (not your custom domain) to isolate DNS issues

## Technical Details
- **Local Build Output**: `/assets/index-BP18jQ6v.js` ✅ CORRECT
- **Vercel Serving**: `/my-site/assets/index-B0HjPaPa.js` ❌ WRONG (cached)
- **Expected After Fix**: `/assets/index-[hash].js` ✅ CORRECT

The different file hashes confirm Vercel is serving an old cached build, not the current codebase.
