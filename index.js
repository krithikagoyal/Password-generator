#!/usr/bin/env node
const commander = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')

commander.version('1.0.0').description('A password generator')

commander
    .option('-l, --length <number>', 'Length of password', 10)
    .option('-s, --save', 'Save password to passwords.txt')
    .option('-nn, --no-numbers', 'Password will not contain numbers')
    .option('-ns, --no-symbols', 'Password will not contain symbols')
    .parse()

const { length, save, numbers, symbols } = commander.opts();

let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let num = '1234567890';
let symbol = '!@#$%^&*()_+-?';

if (numbers) {
    alpha += num;
}

if (symbols) {
    alpha += symbol;
}

let password = ''
for (let i = 0; i < length; i++) {
    password += alpha.charAt(Math.floor(Math.random() * alpha.length));
}

clipboardy.writeSync(password)

console.log(chalk.blue('Generated Password:'), chalk.yellow(password))
console.log(chalk.green('Password copied to clipboard!'))