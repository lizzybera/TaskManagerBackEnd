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
exports.deleteUser = exports.updateUser = exports.readOneUser = exports.readuser = exports.signInAccount = exports.createAccount = void 0;
const authModel_1 = __importDefault(require("../model/authModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, email, password, avatar } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const user = yield authModel_1.default.create({ userName,
            email,
            password: hash,
            avatar });
        return res.status(201).json({
            message: "account created sucessfully",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "account cannot be created"
        });
    }
});
exports.createAccount = createAccount;
const signInAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield authModel_1.default.findOne({ email });
        if (user) {
            const passed = yield bcrypt_1.default.compare(password, user.password);
            if (passed) {
                return res.status(201).json({
                    message: `welcome back ${user.userName}`,
                    data: user._id
                });
            }
            else {
                return res.status(404).json({
                    message: "password is incorrect"
                });
            }
        }
        else {
            return res.status(404).json({
                message: "user not Found"
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "account cannot be created"
        });
    }
});
exports.signInAccount = signInAccount;
const readuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authModel_1.default.find().sort({ createdat: -1 });
        return res.status(200).json({
            message: "user gotten sucessfully",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "user cannot be gotten sucessfully"
        });
    }
});
exports.readuser = readuser;
const readOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield authModel_1.default.findById(id);
        return res.status(200).json({
            message: "one user gotten sucessfully",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "One user cannot be gotten sucessfully"
        });
    }
});
exports.readOneUser = readOneUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { userName, avatar } = req.body;
        const user = yield authModel_1.default.findByIdAndUpdate(id, { userName, avatar }, { new: true });
        return res.status(201).json({
            message: "user updated",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "user cannot be updated"
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield authModel_1.default.findByIdAndDelete(id);
        return res.status(200).json({
            message: "user deleted sucessfully",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Task cannot be deleted"
        });
    }
});
exports.deleteUser = deleteUser;
