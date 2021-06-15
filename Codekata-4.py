n=input()
m=[int(x) for x in input().split(" ")]
f=sorted(m)
l=[]
for i in range(len(f)):
    c=[]
    for j in range(i,len(f)-1):
        if(abs(f[j]-f[j+1])==1):
            c.append(f[j])
            c.append(f[j+1])
    l.append(c)
maxi=len(l[0])
for k in range(len(l)):
    if len(l[k])>maxi:
        maxi=len(l[k])
        h=l[k]
    else:
        h=l[0]
res=[]
for g in h:
    if g not in res:
        res.append(g)
print(len(res))
