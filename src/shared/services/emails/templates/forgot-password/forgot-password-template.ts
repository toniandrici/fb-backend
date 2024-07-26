import fs from 'fs';
import ejs from 'ejs';


class ForgortPasswordTemplate {
  public passwordResetTemplate(username: string, resetLink: string): string {
    return ejs.render(fs.readFileSync(__dirname + '/forgot-password-template.ejs', 'utf-8'), {
      username,
      resetLink,
      image_url: 'https://static.wikia.nocookie.net/p__/images/5/5f/TotK_Link_Artwork_2.png/revision/latest?cb=20230418021839&path-prefix=protagonist'
    });

  }
}

export const forgotPasswordTemplate: ForgortPasswordTemplate = new ForgortPasswordTemplate();
