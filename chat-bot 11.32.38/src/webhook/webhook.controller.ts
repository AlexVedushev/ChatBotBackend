import { Controller, Post, Body } from '@nestjs/common';

@Controller('webhook')

export class WebhookController {
    @Post()
    webhook(@Body() req) {
        console.log(req);
        return 'Hello'
    }
}
