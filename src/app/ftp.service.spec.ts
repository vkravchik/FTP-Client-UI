import { TestBed } from '@angular/core/testing';

import { FtpService } from './ftp.service';

describe('FtpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FtpService = TestBed.get(FtpService);
    expect(service).toBeTruthy();
  });
});
