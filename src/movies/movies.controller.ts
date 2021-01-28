import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get("/:id")
    getOne(@Param("id") id: string) {
        return `This will return one movies with the id : ${id}`;
    }

    @Post()
    create() {
        return `This will create a movie`;
    }

    @Delete(":/id")
    remove(@Param("id") movieId: string) {
        return `This will delete a movie ${movieId}`;
    }

    @Patch(':/id')
    patch(@Param('id') movieId: string) {
        return `This will patch a movie ${movieId}`;
    }
}