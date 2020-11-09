import { expect } from 'chai';
import * as request from "superagent";
import { StatusCodes } from 'http-status-codes';

describe('App test', () => {
    it('should upload a file', async () => {
        await request
            .post('http://localhost:3000/upload')
            .attach('imageupload', 'file1.txt');
    });

    it('should show file list', async () => {
        const response = await request.get('http://localhost:3000/');
            expect(response.status).to.equal(StatusCodes.OK);
            expect(response.body).to.include.members(["file1.txt"]);
    });
});