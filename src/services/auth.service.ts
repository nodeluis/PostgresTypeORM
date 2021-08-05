import bcrypt from 'bcrypt';
import config from 'config';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { isEmpty } from '@utils/util';
import { UsuarioEv } from '@/interfaces/usuarioEv.interfa';
import { EVUsuarioEvEntity } from '@/entity/usuarioEv.entity';
import { UserEVDto } from '@/dtos/VirtualDescktop/userEV.dto';

class AuthService {
  //public users = UserEntity;
  public userEv = EVUsuarioEvEntity;

  /*public async signup(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const userRepository = getRepository(this.users);
    const findUser: User = await userRepository.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createUserData: User = await userRepository.save({ ...userData, password: hashedPassword });
    return createUserData;
  }*/

  /*public async login(userData: CreateUserDto): Promise<{ cookie: string; findUser: User }> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const userRepository = getRepository(this.users);
    const findUser: User = await userRepository.findOne({ where: { email: userData.email } });
    if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);

    const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, findUser };
  }*/

  public async loginDescktop(userData: UserEVDto): Promise<{ cookie: string; findUserEv: UsuarioEv }> {
    if (isEmpty(userData)) throw new HttpException(400, "No existe la data");

    const userEvRepository = getRepository(this.userEv);
    const findUserEv: EVUsuarioEvEntity = await userEvRepository.findOne({ where: { login: userData.login} });
    if (!findUserEv) throw new HttpException(409, `No existe ${userData.login} en la base de datos`);

    const isPasswordMatching: boolean = findUserEv.pass==userData.password;
    if (!isPasswordMatching) throw new HttpException(409, "La contraseña es incorrecta");
    //const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password);
    //if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

    const tokenData = this.createToken(findUserEv);
    const cookie = this.createCookie(tokenData);

    return { cookie, findUserEv };
  }

  /*public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const userRepository = getRepository(this.users);
    const findUser: User = await userRepository.findOne({ where: { email: userData.email, password: userData.password } });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }*/

  public createToken(user: UsuarioEv): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: user.id };
    const secretKey: string = config.get('secretKey');
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: jwt.sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
