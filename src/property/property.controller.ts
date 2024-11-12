import { Body, Controller, Get, Headers, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "All properties";
    }
    
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
        console.log(typeof(id));
        console.log(typeof(sort));
        return id;
    }

    @Post()
    // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    // @HttpCode(202)
    create(
        @Body()
        body: CreatePropertyDto) {
        return body;
    }

    @Patch(':id')
    update(
        @Param('id', ParseIdPipe) identity,
        @Body()
        body: CreatePropertyDto,
        @Headers() header
    ) {
        return body
    }
}
