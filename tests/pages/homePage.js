import { expect } from '@playwright/test';

export class HomePage {
  page;
  signInBtn;

  constructor(page) {
    this.page = page;
    this.signInBtn = page.getByRole('banner').getByRole('link', { name: 'Sign in' });
    this.emailInput = page.getByLabel('Email or phone');
    this.emailNextBtn = page.getByRole('button', { name: 'Next' });
    this.passwordInput = page.getByLabel('Enter your password');
    this.passNextBtn = page.locator('#passwordNext');
    this.createEventBtn = page.locator(".I3EnF");
  }

  async clickOnSignIn() {
    await this.signInBtn.click();
  }

  async enterEmail() {
    await this.emailInput.fill('testacc1889');
  }

  async enterPassword() {
    await this.passwordInput.fill('test@1234');
  }

  async clickOnEmailNextBtn() {
    await this.emailNextBtn.click();
  }

  async clickOnPassNextBtn() {
    await this.passNextBtn.click();
  }

  async load() {
    await this.page.goto('https://calendar.google.com/calendar');
  }

  async login() {
    await clickOnSignIn();
    await enterEmail();
    await clickOnEmailNextBtn();
    await enterPassword();
    await clickOnPassNextBtn();
  }

  async createEvent() {
    await page.waitForTimeout(15000);

    await clickOnSignIn();
    await enterEmail();
    await clickOnEmailNextBtn();
    await enterPassword();
    await clickOnPassNextBtn();
  }
}


await page.waitForSelector(this.createEventBtn);
await page.click('.I3EnF', { force: true });
await page.waitForSelector('[data-key="event"]');
await page.waitForTimeout(2000);
await page.click('[data-key="event"]');
await page.getByPlaceholder("Add title").fill("TestAvomaEvent");

const date = await page.textContent('[data-key="startDate"]');
const from = await page.textContent('[data-key="startTime"]');
const to = await page.textContent('[data-key="endTime"]');

await page.getByRole('button', { name: 'Save' }).click();
await page.getByRole('button', { name: 'TestAvomaEvent' }).waitForSelector().click();

await page.waitForSelector('.NlL62b.EfQccc.elYzab-cXXICe-Hjleke.EiZ8Dd.afiDFd');
const eventDetails = await page.textContent('.NlL62b.EfQccc.elYzab-cXXICe-Hjleke.EiZ8Dd.afiDFd');
expect(eventDetails).toContain("TestAvomaEvent");
expect(eventDetails).toContain((from).replace(/:00$/, ''));
expect(eventDetails).toContain(to);
const commaIndex = date.indexOf(',');
expect(eventDetails).toContain((date).substring(commaIndex + 2));