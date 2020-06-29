import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from '@tmo/shared/models';
import { ReadingListService } from './reading-list.service';

@Controller()
export class ReadingListController {
  constructor(private readonly readingList: ReadingListService) {}

  @Get('/reading-list/')
  async getReadingList() {
    return await this.readingList.getList();
  }

  @Post('/reading-list/')
  async addToReadingList(@Body() item: Book) {
    return await this.readingList.addBook(item);
  }

  @Delete('/reading-list/:id')
  async removeFromReadingList(@Param() params) {
    return await this.readingList.removeBook(params.id);
  }

  @Put('/reading-list/:id/finished')
  async markasRead(@Param() params) {
    return await this.readingList.finishBook(params.id);
  }

  @Put('/reading-list/:id/unfinished')
  async markasUnread(@Param() params) {
    return await this.readingList.unFinishBook(params.id);
  }
}
