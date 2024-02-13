import { test, expect } from './fixtures/calTest';

test.describe('navigation', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.load();
    // Login
    await homePage.login();
  });

  test('Create events', async ({ homePage }) => {
    // Open and fill title
    await homePage.clickOnCreateEventBtn();
    await homePage.clickOnEventOption();
    await homePage.fillTitle();

    // Get Text from event pop-up
    const date = await homePage.getDate();
    const from = await homePage.getFromTime();
    const to = await homePage.getToTime();

    await homePage.clickOnSaveBtn();
    // Click on event card and validate details
    await homePage.clickOnEventCard();
    const eventDetails = await homePage.getEventText();
    expect(eventDetails).toContain("TestAvomaEvent");
    expect(eventDetails).toContain((from).replace(/:00/, ''));
    expect(eventDetails).toContain(to.replace(/:00/, ''));
    const commaIndex = date.indexOf(',');
    expect(eventDetails).toContain((date).substring(commaIndex + 2));
  });

  test('Delete event', async ({ homePage }) => {
    // Delete event
    await homePage.clickOnEventCardWithName();
    await homePage.clickOnDeleteBtn();

    // let eventCardLength = homePage.eventCardLength();
    // expect(eventCardLength).toEqual(0);
  });
});