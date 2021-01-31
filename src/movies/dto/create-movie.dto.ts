import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsOptional()
    @IsString({ each: true }) // each? 모든 요소를 다 검사한다는 의미
    readonly genres: string[];
}