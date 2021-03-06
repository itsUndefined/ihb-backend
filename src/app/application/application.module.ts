import { forwardRef, Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './application.entity';
import { UsersModule } from '../users/users.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
    imports: [
        TypeOrmModule.forFeature([Application]),
        forwardRef(() =>UsersModule),
        MulterModule.register({
            dest: './applications'
        })
    ],
    providers: [ApplicationService],
    controllers: [ApplicationController],
    exports: [ApplicationService]
})
export class ApplicationModule { }
