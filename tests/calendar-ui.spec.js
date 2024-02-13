import { test, expect, chromium } from '@playwright/test';

// testacc1889

test.describe('navigation', () => {
  test.beforeAll(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://calendar.google.com/calendar');
  });

  test('Create events', async ({ page }) => {
    // Wait for the create button to appear
    await page.getByRole('banner').getByRole('link', { name: 'Sign in' }).click();
    await page.getByLabel('Email or phone').fill('testacc1889');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Enter your password').fill('test@1234');
    await page.click("#passwordNext");

    // Click on the create button using forceful click
    await page.waitForTimeout(15000);
    await page.waitForSelector('.I3EnF');
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
  });

  test('Delete event', async ({ page }) => {
    await page.getByRole('button', { name: 'TestAvomaEvent' }).click();
    await page.click("#xDetDlgDelBu");

    expect(page.getByLabel('TestAvomaEvent')).not.toBeVisible();
  });
});