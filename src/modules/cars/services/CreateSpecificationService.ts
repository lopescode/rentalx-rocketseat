import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationsAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationsAlreadyExists) {
      throw Error('Specification already exists');
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
