export const resolveJWTToken = (token: string) => {
 const splited = token.split('.');
 return ({
    header: Buffer.from(splited[0], 'base64'),
    payload: Buffer.from(splited[1], 'base64'),
    verifySignature: Buffer.from(splited[2], 'base64'),
 });
}