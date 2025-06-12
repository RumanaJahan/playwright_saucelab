import { test, expect } from '@playwright/test';
import * as commonfunction from '../pageobject/commonfunction.js';

test('Testcase01 - Desktop - Verify That User Can Login Successfully To Sauce Demo', async ({ page, context }) => 
  {
  //Launch the Sauce Demo Website
  await commonfunction.launchdesktopsaucedemo(page);

  //Get desktop username for login
  const desktopusername = await commonfunction.getusername();
  console.log("desktopusername is = " + desktopusername);
  
  //Get desktop password for login
  const desktoppassword = await commonfunction.getpassword();
  console.log("desktoppassword is = " + desktoppassword);


  //Login to Sauce Demo Website
  await commonfunction.loginDesktop(page,desktopusername,desktoppassword);
  });