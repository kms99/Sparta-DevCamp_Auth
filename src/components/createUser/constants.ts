import { Role } from "../selectWrapper/selectWrapper.type";

const BASIC_INPUTS = [
  {
    innerLabel: "이름",
    id: "username",
    type: "text",
    placeholder: "홍길동",
  },
  {
    innerLabel: "이메일",
    id: "email",
    type: "email",
    placeholder: "hello@sparta-devcamp.com",
  },
  {
    innerLabel: "연락처",
    id: "phone",
    type: "text",
    placeholder: "01000000000",
  },
];

const PW_INPUTS = [
  {
    innerLabel: "비밀번호",
    id: "password",
    type: "password",
  },
  {
    innerLabel: "비밀번호 확인",
    id: "password_check",
    type: "password",
  },
];

const BASIC_SELECTS = [
  {
    innerLabel: "역할",
    id: "role",
    placeholder: "역할을 선택해주세요",
    values: [Role.ADMIN, Role.GENERAL],
  },
];

export { BASIC_INPUTS, PW_INPUTS, BASIC_SELECTS };
