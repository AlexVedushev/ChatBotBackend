import { Controller, Post } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
    @Post()
    webhook() {
        
    }
}
