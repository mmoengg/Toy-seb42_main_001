package com.codestates.server_001_withskey.global.advice;

import lombok.Getter;

@Getter
public enum ExceptionCode {

    MEMBER_NOT_FOUND(402,"회원이 존재하지 않습니다."),
    EMAIL_ALREADY_EXIST(403,"이미 가입된 이메일 입니다"),
    DATA_IS_EMPTY(404,"저장된 데이터가 없습니다."),
    METHOD_NOT_ALLOWED(405,"요청에 적합한 메서드가 아닙니다"),
    INTERNAL_SERVER_ERROR(406,"Null Point Exception");

    @Getter
    int status;
    @Getter
    String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
