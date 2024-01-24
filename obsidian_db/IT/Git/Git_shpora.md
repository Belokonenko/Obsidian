remuve 
	rm -rf .git/

system
	git config --system
user
	git config --global
project
	git config 
	

	git config user.email
	git config user.name

	git config --global core.editor "vim -wl1"
	git config --global color.ui true
	 
	
git help
	git help
	git help help
	
	
	git init
	git add .
	git commit -m "init commit"
		(less than 50 char)
		что делает этот комит
		( комит исправляет баг такойто)
		
		
log	
	git log -n 1
		( где 1 количество комитов)
	
	git log --since=2018-05-15
		(Ограничить коммиты теми, которые сделаны 
		после указанной даты.)
	
	git log --until=2018-05-15
		(--until, --before	Ограничить коммиты
		теми, которые сделаны до указанной даты)
	
	git log --autor=codein
	
	git log --grep="first"
	

HEAD
	переменая с указателем
	последнее состояние комита
	
	branch master>|1----| |2----| |3----|
							          ^-HEAD
	

	
status
	git status	
	
	
diff
	git diff
	
	git diff name_file
	
	git diff --staged 
		(сравтить буфер с репозиторием)
		
		
rm
	rm -r file_name
	git rm file_name
	git commit -m "info to delit"
	
	git rm file_name
	git commit -m "info to delit"
	
mv
	git mv file_name1 file_name2
	
	
commit all	
	git commit -am "message " 	
		(без add, не работает с rm mv)
	
	
cancellation of changes
	git checkout name_file
		(отменить изменения в name_file)
	git checkout -- name_file
			
			(в текушем бранче)

		
cancellation of changes boofer
	git reser HEAD name_file
	
	
Изменить последний комит
	git add file_name 
		(в буфер изминения в коде)
	git commit --amed -m "message to commit"
		(добовать в старый комит
		 так можно изименить сообщение комита
		)
		
взять вайл из познегоо комита
	git checkout d5fs6a6df4asdf4d5sa -- name_file
		(файл из нужного комита)
	
		 
отменить изменения комита
	git revert s35ef13se15fse3af13afe
	

git reset	
	--soft 
		(переместит HEAD на нужный комит)
	--mixed
		(переместит HEAD на нужный комит
		 и поместит его в буфер)
	--hard
		(переместит HEAD на нужный комит
		 и поместит его в буфер
		 и изменит рабочую версию)
		
		(сохранить хеш позних комитов так 
		 как они ичезнут из log)

		 
clean	
	git clean -n
		(тест покажит что он может удалить)
		
	git clean -f
		(удалит все что не репозитории)
		
		 
		 
Git Ignore	
	.gitignore
		( name_file
		  # coment
		  ! not
		  papka/name_file
		  !dir/file_name
		  regexp

	git config --global core.excludesfile C:\User\.gitignore_glob
		(глобальный игнор)
		
	(чтоб игнорить уже гит файл)
	.gitignore	
		name_file
	git rm --cachet name_file
		удалит из буфера
		
		
tree-ish	
	(чтото что ууказивает на комит)
		full SHA-1 hash

		

		
	обращение к предку
		HEAD^ 
		s30se^
		master^
	к предку предка
		HEAD^^
		sll3ll^^
		master^^
	или
		HEAD~2
		sl32j~4
		master~5
		
git ls-tree HEAD~5
	(состояние комита 5 комитов то му (папки))
git ls-tree HEAD~5 nam_dir
	(состояние nam_dir)
	
	
git log --oneline
	(однострочный)
git log --format=oneline
	(полный SHA)

renge
	git log 2jk2h..2388uh --oneline
		(в диопазоне покажет все комиты)

	git log 328dh.. name_file 
		(что происходило с файлом раньше)
		

git log -p
	(изминение в файлах)
	
	
git log --stat --summary
	(кратко  где были изменения)
	

git log --graph
	граф бранчей
	
git log --oneline --graph --all --decorate


git log --oneline
git show 342h2l3
	( изменения по сравнению с пред идущим)