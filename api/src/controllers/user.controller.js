import { User } from "../model/User.model.js";
import bcrypt from "bcrypt";
import { createToken } from "../jwt/jwt.js";
export const addUser = async (req, res) => {
  const password = req.body.password;
  const { email, username, name, surname, age, role } = req.body;

  const userEmail = await User.findOne({
    where: {
      email,
    },
  });

  if (!userEmail) {
    const UserSurname = await User.findOne({
      where: {
        username,
      },
    });
    if (!UserSurname) {
      bcrypt.hash(password, 8, async (err, hash) => {
        if (err) {
          res.send(500).json({ msg: "internal server error" });
        } else {
          const newUser = await User.create({
            email,
            username,
            password: hash,
            name,
            surname,
            age,
            role,
          });
          res.status(200).send(newUser);
        }
      });
    } else {
      res.status(404).json({
        msg: `el usuario con el username ${username} ya esta registrado, por favor intentar con otro username`,
      });
    }
  } else {
    res.status(404).json({
      msg: `el usuario con el correo ${email} ya esta registrado, por favor intentar con otro correo`,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) {
    bcrypt.compare(password, user.password, (err, check) => {
      if (err) {
        res.status(500).json({ msg: "internal server error" });
      } else {
        if (check) {
          res.status(200).json({
            token: createToken(user),
            user
          });
        } else {
          res
            .status(500)
            .json({ msg: "password incorrecta, vuelve a intentarlo" });
        }
      }
    });
  } else {
    res.status(404).json({ msg: "el usuario no existe, porfavor registrese" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  user.set(req.body);
  await user.save();
  res.status(200).json(user);
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ msg: "user eliminado" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
