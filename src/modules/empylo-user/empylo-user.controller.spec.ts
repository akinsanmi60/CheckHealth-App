import { Test, TestingModule } from "@nestjs/testing";
import { EmpyloUserController } from "./empylo-user.controller";
import { EmpyloUserService } from "./empylo-user.service";

describe("EmpyloUserController", () => {
  let controller: EmpyloUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpyloUserController],
      providers: [EmpyloUserService],
    }).compile();

    controller = module.get<EmpyloUserController>(EmpyloUserController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
