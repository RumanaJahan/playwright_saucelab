import { test, expect } from '@playwright/test';
import * as commonfunction from '../pageobject/commonfunction.js';

test('Testcase02 - Mobile - Verify That User Can Login Successfully To Sauce Demo', async ({ page, context }) => 
  {
  //Launch the Sauce Demo Website
  const mobile = await commonfunction.launchmobilesaucedemo();

  //Get mobile username for login
  const mobileusername = await commonfunction.getusername();
  console.log("mobileusername is = " + mobileusername);
    
  //Get mobile password for login
  const mobilepassword = await commonfunction.getpassword();
  console.log("mobilepassword is = " + mobilepassword);

  //Login to Sauce Demo Website
  await commonfunction.loginMobile(mobile,mobileusername,mobilepassword);
  await page.close();
  await mobile.bringToFront();
  });