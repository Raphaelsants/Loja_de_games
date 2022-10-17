import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Jogo } from './entities/jogo.entity';

@Injectable()
export class JogosService {
  
  findAll() {
   this.jogos;
  }
  private jogos: Jogo [] = [];
  create(createJogoDto: CreateJogoDto) {
    const atualIdMax = this.jogos [this.jogos.length - 1]?.id || 0;
    const id = atualIdMax + 1;
    const jogo = {
      id,
      ...createJogoDto,
    };
    this.jogos.push(jogo)
    return jogo
  }

  findOne(id: number) {
    const index = this.jogos.findIndex((Jogo) => Jogo.id === id);
    return this.jogos[index];
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
   const jogo = this.findOne(id);
   const novoJogo = {
    ...jogo,
    ...updateJogoDto
   }
   const index = this.jogos.findIndex((Jogo) => Jogo.id === id);
   this.jogos[index] = novoJogo
   return novoJogo;
  }

  remove(id: number) {
    const index = this.jogos.findIndex((Jogo) => Jogo.id === id);
    if (index === -1){
      throw new NotFoundException("Jogo não encontrado!");
    }
    this.jogos.splice(index, 1);
  }
}
