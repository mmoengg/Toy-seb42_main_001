package com.codestates.server_001_withskey.global.security;

import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.service.MemberService;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;

import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;


@Service
public class withsKeyOAuth2UserService extends DefaultOAuth2UserService {

    private final MemberService memberService;

    public withsKeyOAuth2UserService(MemberService memberService) {
        this.memberService = memberService;
    }
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String email = oAuth2User.getAttribute("email");
        String displayName = oAuth2User.getAttribute("name");
        String oauth2Type = userRequest.getClientRegistration().getRegistrationId();

        Member member = memberService.findMemberByEmail(email);

        if(member ==null) {
            member = new Member(email);
            member.setDisplayName(displayName);
            member.setOauthType(oauth2Type);
            memberService.createMember(member);
        } else {
            member.setDisplayName(displayName);
            member.setOauthType(oauth2Type);
            try {
                memberService.updateMember(member);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            return oAuth2User;
        }
        return oAuth2User;
    }
}