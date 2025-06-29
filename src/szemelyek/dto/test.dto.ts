import { IsString, IsNotEmpty } from 'class-validator';

export class TestDto {
  @IsString({ message: 'A névnek szövegnek kell lennie' })
  @IsNotEmpty({ message: 'A név kötelező' })
  name: string;
}