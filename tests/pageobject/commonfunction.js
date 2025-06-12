// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect, devices, chromium } from '@playwright/test';

 //--------------------------------------------------------------------------------------------------------------------------
 //LAUNCH SPECIFIC PAGES
 //--------------------------------------------------------------------------------------------------------------------------

 export async function launchdesktopsaucedemo(page) 
 {
   const nav = await page.goto('/');
   const desktopurl = page.url();
   await expect(page).toHaveURL(desktopurl);
   console.log('Current url is:', desktopurl);
   await page.setViewportSize({ width: 1920, height: 1080 });
 }

 // Select the first username
 /*
export async function getusername() {
  const usernamearray = [
    { username: 'standard_user' },
    { username: 'locked_out_user' },
    { username: 'problem_user' },
    { username: 'performance_glitch_user' },
    { username: 'error_user' },
    { username: 'visual_user' },
  ];
  return usernamearray[0].username;
}
*/

// Select random username
export async function getusername() {
  const usernamearray = [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user',
  ];
  const randomIndex = Math.floor(Math.random() * usernamearray.length);
  return usernamearray[randomIndex];
}

//Get the password
 export async function getpassword() 
 {
 return 'secret_sauce';
 }
 
 export async function loginDesktop(page,desktopusername,desktoppassword ) 
 {
   // Enter the username
   const desktopusernamefield = await page.locator('//*[@id="user-name"]');
   await expect(desktopusernamefield).toBeVisible();
   await desktopusernamefield.fill(desktopusername);

   // Enter the password
   const desktoppasswordfield = await page.locator('//*[@id="password"]');
   await expect(desktoppasswordfield).toBeVisible();
   await desktoppasswordfield.fill(desktoppassword);

   // Click the login button
   const desktoploginbutton = await page.locator('//*[@id="login-button"]');
   await desktoploginbutton.click();
   
   //Validation after login
   await expect(page.getByText('Products')).toBeVisible();
 }

 export async function launchmobilesaucedemo() 
 {
   const browser = await chromium.launch();
   const context = await browser.newContext({ ...devices['iPhone X'] });
   const mobile = await context.newPage();
   await mobile.goto('/');
   const mobileurl = mobile.url();
   await expect(mobile).toHaveURL(mobileurl);
   console.log('Current url is:', mobileurl);
   await mobile.setViewportSize({ width: 450, height: 1070});
   return mobile;
}

export async function loginMobile(page,mobileusername,mobilepassword) 
 {
   // Enter the username
   const mobileusernamefield = await page.locator('//*[@id="user-name"]');
   await expect(mobileusernamefield).toBeVisible();
   await mobileusernamefield.fill(mobileusername);

   // Enter the password
   const mobilepasswordfield = await page.locator('//*[@id="password"]');
   await expect(mobilepasswordfield).toBeVisible();
   await mobilepasswordfield.fill(mobilepassword);

   // Click the login button
   const mobileloginbutton = await page.locator('//*[@id="login-button"]');
   await mobileloginbutton.click();
   
   //Validation after login
   await expect(page.getByText('Products')).toBeVisible();
 }