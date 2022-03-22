describe('Buttons', () => {
    it('base example, visually looks correct', async () => {
        // APIs from jest-puppeteer
        // iframe.html?id=     papka
        await page.goto('http://localhost:9009/iframe.html?id=mycomponents-button-triplebuttons--buttons&viewMode=story');
        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});
