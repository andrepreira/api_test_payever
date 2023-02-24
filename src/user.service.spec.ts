import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user/user.service';
import { getModelToken } from '@nestjs/mongoose';
import { User, UserDocument } from './user/user.schema';
import axios from 'axios';

jest.mock('axios');

describe('UserService', () => {
  let service: UserService;
  const userModelMock = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: userModelMock,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    // it('should create a user', async () => {
    //   const userData = {
    //     id: 1,
    //     first_name: 'John',
    //     email: 'john@example.com',
    //   };
    //   const userDocumentMock = new User();
    //   userModelMock['save'] = jest.fn().mockResolvedValue(userData);
    //   const result = await service.createUser(userData);
    //   expect(userModelMock['save']).toHaveBeenCalledWith(userDocumentMock);
    //   expect(result).toEqual(userDocumentMock);
    // });
  });

  describe('getUserData', () => {
    it('should retrieve user data from an external API', async () => {
      const userId = '1';
      const userData = {
        id: 1,
        first_name: 'John',
        email: 'john@example.com',
      };
      const responseMock = {
        data: {
          data: userData,
        },
      };
      axios.get = jest.fn().mockResolvedValue(responseMock);
      const result = await service.getUserData(userId);
      expect(axios.get).toHaveBeenCalledWith(`https://reqres.in/api/users/${userId}`);
      expect(result).toEqual(userData);
    });
  });

  describe('getUserAvatar', () => {
    // it('should retrieve user avatar from the database', async () => {
    //   const userId = '1';
    //   const userAvatarMock = Buffer.from('avatar data', 'base64');
    //   const user = {
    //     id: 1,
    //     first_name: 'John',
    //     email: 'john@example.com',
    //     avatar: userAvatarMock,
    //   }
    //   const userDocumentMock = new User();
    //   userModelMock['findOne'] = jest.fn().mockResolvedValue(userDocumentMock);
    //   const result = await service.getUserAvatar(userId);
    //   expect(userModelMock['findOne']).toHaveBeenCalledWith({ userId });
    //   expect(result).toEqual(userAvatarMock.toString('base64'));
    // });

    it('should return null if user has no avatar', async () => {
      const userId = '1';
      const user = {
        id: 1,
        first_name: 'John',
        email: 'john@example.com',
        avatar: null,
      }
      const userDocumentMock = new User();
      userModelMock['findOne'] = jest.fn().mockResolvedValue(userDocumentMock);
      const result = await service.getUserAvatar(userId);
      expect(userModelMock['findOne']).toHaveBeenCalledWith({ userId });
      expect(result).toBeNull();
    });
  });

  describe('deleteUserAvatar', () => {
    it('should delete user avatar from the database', async () => {
      const userId = '1';
      userModelMock['deleteOne'] = jest.fn().mockResolvedValue({});
      await service.deleteUserAvatar(userId);
      expect(userModelMock['deleteOne']).toHaveBeenCalledWith({ id: userId });
    });
  });

});

