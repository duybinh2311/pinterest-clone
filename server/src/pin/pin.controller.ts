import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreatePinDto } from './dto/create-pin.dto'
import { UpdatePinDto } from './dto/update-pin.dto'
import { PinService } from './pin.service'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { PinMessages } from './pin.types'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'

@ApiTags('Pin')
@Controller('pin')
export class PinController {
  constructor(private readonly pinService: PinService) {}

  @ApiResponse({ status: 201, description: PinMessages.UPLOAD_SUCCESSFULLY })
  @Post('create')
  create(@AuthUser() authUser: AuthUserDto, @Body() createPinDto: CreatePinDto) {
    return this.pinService.create(authUser, createPinDto)
  }

  @Get()
  findAll() {
    return this.pinService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinService.findById(+id)
  }

  @ApiResponse({ status: 200, description: PinMessages.UPDATE_SUCCESSFULLY })
  @ApiResponse({ status: 404, description: PinMessages.NOT_FOUND })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePinDto: UpdatePinDto) {
    return this.pinService.update(+id, updatePinDto)
  }

  @ApiResponse({ status: 200, description: PinMessages.DELETED_SUCCESSFULLY })
  @ApiResponse({ status: 404, description: PinMessages.NOT_FOUND })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinService.remove(+id)
  }
}
