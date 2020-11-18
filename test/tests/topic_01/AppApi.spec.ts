import { expect } from 'chai';
import * as request from "superagent";
import { StatusCodes } from 'http-status-codes';

describe('Topic 01', () => {
    var urls: { [id: string]: string; } = {
        'upload': 'http://localhost:3000/back',
        'list': 'http://localhost:3000/back'
    };

    it('should upload a single file', async () => {
        const filePath = getFilePath('file1');
        const response = await request
            .post(urls['upload'])
            .attach('imageupload', filePath);

        expect(response.status).to.equal(StatusCodes.OK);
    });

    /* Will be test multiple uploads
    it('should upload multiple files', async () => {
        const response = await request
            .post(urls['uploads'])
            .attach('imageupload_01', getFilePath('file1'))
            .attach('imageupload_02', getFilePath('file2'))
            .attach('imageupload_03', getFilePath('file3'));

        expect(response.status).to.equal(StatusCodes.OK);
    });*/

    it('should show file list', async () => {
        const filePath = getFilePath('file1');
        const fileName = filePath.substr(filePath.lastIndexOf('/') + 1);
        const response = await request.get(urls['list']);

        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body.join()).to.include(fileName);
    });
});

export function getFilePath(fileName: string) {
    let path = "";

    switch (fileName) {
        case "file1":
            path = "tests/topic_01/files/text/file1.txt";
            break;
    }

    return path;
}