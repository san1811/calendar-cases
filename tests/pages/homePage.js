const EVENTNAME = "TestAvomaEvent";
const EMAILID = "testacc1889";
const PASS = "test@1234";
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
    this.eventDDlOption = page.locator("span[aria-label='Event'] div[class='jO7h3c']");
    this.eventTitleInput = page.getByPlaceholder("Add title");
    this.eventPopupStartDate = '[data-key="startDate"]';
    this.eventPopupStartTime = '[data-key="startTime"]';
    this.eventPopupEndTime = '[data-key="endTime"]';
    this.saveBtn = page.getByRole('button', { name: 'Save' });
    // this.eventCard = page.getByRole('button', { name: 'Save' });
    this.eventDetails = ".NlL62b.EfQccc.elYzab-cXXICe-Hjleke.EiZ8Dd.afiDFd";
    this.eventCardWithName = page.locator(".NlL62b.EfQccc.elYzab-cXXICe-Hjleke.EiZ8Dd.afiDFd");
    this.deleteBtn = page.locator('#xDetDlgDelBu');
    this.eventDeletedText = page.getByLabel('Event deleted');
  }

  async eventCardLength() {
    const elementsLength = await this.eventCardWithName.count();
    return elementsLength;
  }

  async clickOnEventCardWithName() {
    await this.eventCardWithName.click();
  }

  async clickOnDeleteBtn() {
    await this.deleteBtn.click();
  }

  async clickOnSignIn() {
    await this.signInBtn.click();
  }

  async clickOnSaveBtn() {
    await this.saveBtn.click();
  }

  async clickOnEventCard() {
    await this.eventCardWithName.click();
  }

  async clickOnSignIn() {
    await this.signInBtn.click();
  }

  async enterEmail() {
    await this.emailInput.fill(EMAILID);
  }

  async enterPassword() {
    await this.passwordInput.fill(PASS);
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

  async fillTitle() {
    await this.eventTitleInput.fill(EVENTNAME);
  }

  async clickOnCreateEventBtn() {
    await this.page.waitForTimeout(8000);
    await this.createEventBtn.click({ force: true });
  }

  async clickOnEventOption() {
    await this.page.waitForTimeout(1000);
    await this.eventDDlOption.click({ force: true });
  }

  async login() {
    await this.clickOnSignIn();
    await this.enterEmail();
    await this.clickOnEmailNextBtn();
    await this.enterPassword();
    await this.clickOnPassNextBtn();
  }

  async getDate() {
    return await this.page.textContent(this.eventPopupStartDate);
  }

  async getFromTime() {
    return await this.page.textContent(this.eventPopupStartTime);
  }

  async getToTime() {
    return await this.page.textContent(this.eventPopupEndTime);
  }

  async getEventText() {
    return await this.page.textContent(this.eventDetails);
  }
}