import { test, expect } from './fixtures/calTest';

// testacc1889

test.describe('navigation', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.load();
    await homePage.login();
  });

  test('Create events', async ({ homePage }) => {
    // // Click on the create button using forceful click
    // await page.waitForTimeout(15000);
    // await page.waitForSelector('.I3EnF');
    // await page.click('.I3EnF', { force: true });
    // await page.waitForSelector('[data-key="event"]');
    // await page.waitForTimeout(2000);
    // await page.click('[data-key="event"]');
    // await page.getByPlaceholder("Add title").fill("TestAvomaEvent");

    // const date = await page.textContent('[data-key="startDate"]');
    // const from = await page.textContent('[data-key="startTime"]');
    // const to = await page.textContent('[data-key="endTime"]');

    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.getByRole('button', { name: 'TestAvomaEvent' }).waitForSelector().click();

    // await page.waitForSelector('.NlL62b.EfQccc.elYzab-cXXICe-Hjleke.EiZ8Dd.afiDFd');
    // const eventDetails = await page.textContent('.NlL62b.EfQccc.elYzab-cXXICe-Hjleke.EiZ8Dd.afiDFd');
    // expect(eventDetails).toContain("TestAvomaEvent");
    // expect(eventDetails).toContain((from).replace(/:00$/, ''));
    // expect(eventDetails).toContain(to);
    // const commaIndex = date.indexOf(',');
    // expect(eventDetails).toContain((date).substring(commaIndex + 2));
  });

  test.skip('Delete event', async ({ page }) => {
    await page.getByRole('button', { name: 'TestAvomaEvent' }).click();
    await page.click("#xDetDlgDelBu");

    expect(page.getByLabel('TestAvomaEvent')).not.toBeVisible();
  });
});