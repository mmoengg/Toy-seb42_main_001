package com.codestates.server_001_withskey.domain.comment.controller;


import com.codestates.server_001_withskey.domain.comment.dto.CommentBoardDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.comment.mapper.CommentBoardMapper;
import com.codestates.server_001_withskey.domain.comment.service.CommentBoardService;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comments/drinks")
@RequiredArgsConstructor
public class CommentDrinkController {
    private final MemberService memberService;
    private final CommentBoardMapper mapper;
    private final CommentBoardService commentBoardService;

    @PostMapping
    public ResponseEntity postComment(@RequestBody CommentBoardDto.Post postComment){
        long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        Member member = memberService.findMemberById(memberId);
        CommentBoard commentBoard = mapper.dtoToComment(postComment, member);
        commentBoardService.saveCommentBoard(commentBoard);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{commentBoardId}")
    public ResponseEntity patchComment(@PathVariable long commentBoardId,
                                       @RequestBody CommentBoardDto.Patch patch){
        patch.setCommentBoardId(commentBoardId);
        commentBoardService.updateComment(patch);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{commentBoardId}")
    public ResponseEntity deleteComment(@PathVariable long commentBoardId){
        commentBoardService.deleteComment(commentBoardId);
        return ResponseEntity.noContent().build();
    }
}
