package com.codestates.server_001_withskey.domain.drink.Controller;


import com.codestates.server_001_withskey.domain.drink.Mapper.DrinkMapper;
import com.codestates.server_001_withskey.domain.drink.Service.DrinkService;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.drink.Dto.DrinkDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@Slf4j
@RequestMapping("/drinks")
public class DrinksController {

    private final DrinkService drinkService;
    private final DrinkMapper mapper;

    public DrinksController(DrinkService drinkService,
                            DrinkMapper mapper) {
        this.drinkService = drinkService;
        this.mapper = mapper;
    }

    @GetMapping("/{drink-id}")
    public ResponseEntity getDrink(@PathVariable("drink-id")@Positive long drinkId) {
        Drink drink = drinkService.findDrink(drinkId);
        DrinkDto.Response response = mapper.drinkToDrinkResponseDetail(drink);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getDrinks() {
        List<Drink> drinks = drinkService.findAllDrink();

        List<DrinkDto.Response> responses = mapper.drinksToResponses(drinks);

        return new ResponseEntity(responses, HttpStatus.OK);
    }
}
