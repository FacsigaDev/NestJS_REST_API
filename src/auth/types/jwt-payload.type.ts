export interface JwtPayload {
  sub: number;
  role: string;
  // egyéb tulajdonságok, ha vannak, pl. email: string
}