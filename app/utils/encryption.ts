import crypto from 'crypto';

const ENCRYPTION_KEY = '8bfaad87279bb25f2e1094285a80f1b81b4f41a3ea58503d8df1f3789e4ad529';
const IV_LENGTH = 16; // Length of IV for AES

// Ensure ENCRYPTION_KEY is a 32-byte (256-bit) key
const keyBuffer = Buffer.from(ENCRYPTION_KEY, 'hex');
if (keyBuffer.length !== 32) {
    throw new Error('Invalid key length. The key must be 32 bytes long for aes-256-cbc.');
}

export function encrypt(text: string): string {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, iv);
    const encrypted = Buffer.concat([
        cipher.update(text, 'utf8'),
        cipher.final()
    ]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export function decrypt(encryptedText: string): string {
    const [ivHex, encryptedHex] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encryptedBuffer = Buffer.from(encryptedHex, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, iv);
    const decrypted = Buffer.concat([
        decipher.update(encryptedBuffer),
        decipher.final()
    ]);
    return decrypted.toString('utf8');
}
