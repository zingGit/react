import { ApiProperty } from '@nestjs/swagger';

export class RedisSet {
      
      @ApiProperty({description: "key"})
      readonly  key: string;
      @ApiProperty({description: "value"})
      readonly value: any;
      
}
