import { expect } from 'chai';
import * as request from "superagent";
import { StatusCodes } from 'http-status-codes';

describe('App test', () => {
    it('should upload a file', async () => {
        const response = await request
            .post('http://localhost:3000/back')
            .attach('imageupload', 'file1.txt');

        expect(response.status).to.equal(StatusCodes.OK);
    });

    it('should show file list', async () => {
        const response = await request.get('http://localhost:3000/back');

        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body.join()).to.include("file1.txt");
    });
});