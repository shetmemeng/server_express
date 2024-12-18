"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentTwilioSms = void 0;
const axios_1 = __importDefault(require("axios"));
const sentTwilioSms = (to, message) => __awaiter(void 0, void 0, void 0, function* () {
    const myHeaders = {
        Authorization: "App 62135ca03a0d4cb5692db874178209e7-7eed1b23-1a21-4075-862e-446d52bcb0f2",
        "Content-Type": "application/json",
        Accept: "application/json",
    };
    const raw = {
        messages: [
            {
                destinations: [{ "to": "639671887113" + to }],
                from: "447491163443",
                text: message,
            },
        ],
    };
    try {
        yield axios_1.default.post("https://pe2n68.api.infobip.com/sms/2/text/advanced", raw, { headers: myHeaders });
    }
    catch (err) {
        console.error(err);
    }
});
exports.sentTwilioSms = sentTwilioSms;
