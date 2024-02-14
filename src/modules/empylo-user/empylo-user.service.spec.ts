import { Test, TestingModule } from "@nestjs/testing";
import { EmpyloUserService } from "./empylo-user.service";

describe("EmpyloUserService", () => {
  let service: EmpyloUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpyloUserService],
    }).compile();

    service = module.get<EmpyloUserService>(EmpyloUserService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
