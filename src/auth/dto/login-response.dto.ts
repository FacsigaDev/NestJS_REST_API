import { ApiProperty } from '@nestjs/swagger';

// Response DTO a JWT-hez
export class LoginResponseDto {
  @ApiProperty({ description: 'JWT token', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  access_token: string;
}