import { AddNote } from '../../domain/index.js';

/**
 * @public
 * @class `DbAddNote` - It's an implementation of database add
 * note.
 *
 * @constructor `addNoteRepository` - It's an implementation of
 * database add note repository.
 */
export class DbAddNote extends AddNote {
  constructor(addNoteRepository) {
    super();
    this.addNoteRepository = addNoteRepository;
  }

  async add(note) {
    return await this.addNoteRepository.add(note);
  }
}
