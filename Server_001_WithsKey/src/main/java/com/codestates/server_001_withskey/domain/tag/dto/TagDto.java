package com.codestates.server_001_withskey.domain.tag.dto;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.image.dto.ImageDto;
import com.codestates.server_001_withskey.domain.image.dto.ImageDto.Response;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;

public class TagDto {
    @Data
    public static class Post{
        private long tagId;
        private String tagName;
        private String tagInfo;

        private List<BoardDto.Post> board;
//        private List<DrinkDto.Post> drinks;

    }

    @Data
    public static class Response{
        private long tagId;
        private String tagName;
        private String tagInfo;

        private List<BoardDto.Response> board;
//        private List<DrinkDto.Response> drink;

    }
}
